import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  tags?: string
  updatedAt?: string
}

export type BlogPostData = {
  metadata: Metadata,
  slug: string,
  content: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function getBlogPostsSorted(ascending: boolean = false) {
  return getBlogPosts().sort((a, b) => {
    if (
      ascending ? new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt)
      : new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  })
}

function getBlogPostsSortedByUpdated(ascending: boolean = false) {
  return getBlogPosts().sort((a, b) => {
    if (
      ascending ? new Date(a.metadata.updatedAt ? a.metadata.updatedAt : a.metadata.publishedAt) < new Date(b.metadata.updatedAt ? b.metadata.updatedAt : b.metadata.publishedAt)
      : new Date(a.metadata.updatedAt ? a.metadata.updatedAt : a.metadata.publishedAt) > new Date(b.metadata.updatedAt ? b.metadata.updatedAt : b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  })
}

export function getBlogPostsByYear(byUpdated: boolean = false, byAscending: boolean = false, filter: string[] = [], query: string) : Map<number, BlogPostData[]> {
  const posts = new Map<number, BlogPostData[]>();

  let sorted = byUpdated ? getBlogPostsSortedByUpdated(byAscending) : getBlogPostsSorted(byAscending);

  if (query?.length > 0) {
    sorted = sorted.filter((post) => {
      return post.metadata.title.toLowerCase().includes(query.toLowerCase()) || post.metadata.summary.toLowerCase().includes(query.toLowerCase());
    });
  }

  if (filter?.length > 0) {
    sorted = sorted.filter((post) => {
      return filter.some((tag) => post.metadata.tags?.includes(tag));
    });
  }

  sorted.forEach((post) => {
    const updatedDate = post.metadata.updatedAt ? post.metadata.updatedAt : post.metadata.publishedAt;
    let publishedDate = new Date(byUpdated ? updatedDate : post.metadata.publishedAt);
    const year = publishedDate.getFullYear();

    let yearDict = posts.get(year);
    if (!yearDict) {
      posts.set(year, []);
      yearDict = posts.get(year);
    }
    
    yearDict?.push(post);
  });

  return posts;
}

export function formatBlogDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric'
  })

  return `${fullDate}`
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
