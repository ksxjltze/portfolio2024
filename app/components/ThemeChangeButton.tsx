'use client'

import { useTheme, Theme } from "../contexts/ThemeContext";

type Props = {
    newTheme: Theme,
    className: string,
    children
}

const ThemeChangeButton: React.FC = (props: Props) => {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      onClick={() => changeTheme(props.newTheme)}
      className={props.className}
      aria-label={`Switch to ${theme} theme`}
    >
        {props.children}
    </button>
  );
};

export default ThemeChangeButton;