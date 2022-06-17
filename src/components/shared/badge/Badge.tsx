import { styled, useTheme } from "@mui/material";

interface BadgeProps {
  color: "new" | "update" | "complete" | "cancel";
}

const Badge = styled("span")(({ color }: BadgeProps) => {
  const { palette } = useTheme();
  let bg: string;
  let clr: string;
  switch (color) {
    case "new":
      bg = palette.primary.main;
      clr = palette.primary.contrastText;
      break;
    case "update":
      bg = palette.warning.main;
      clr = palette.warning.contrastText;
      break;
    case "complete":
      bg = palette.success.main;
      clr = palette.success.contrastText;
      break;

    default:
      bg = palette.error.main;
      clr = palette.error.contrastText;
      break;
  }

  return {
    display: "inline-block",
    borderRadius: "30px",
    padding: "2px 15px",
    fontSize: "12px",
    backgroundColor: bg,
    color: clr,
  };
});

export default Badge;
