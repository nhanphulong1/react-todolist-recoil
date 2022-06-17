import { styled } from "@mui/material";

interface SpacerProps {
  axis?: "horizontal" | "vertical";
  size: number;
}

const Spacer = styled("span")(({ axis, size }: SpacerProps) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return {
    display: "block",
    width,
    minWidth: width,
    height,
    minHeight: height,
  };
});

export default Spacer;
