import { useMediaQuery, useTheme } from "@mui/material";

export default function useAppBarHeight() {
  const {
    mixins: { toolbar },
    breakpoints,
  } = useTheme();

  const toolbarDesktopQuery = breakpoints.up("sm");

  const toolbarLandscapeQuery = `${breakpoints.up(
    "xs",
  )} and (orientation: landscape)`;

  const isDesktop = useMediaQuery(toolbarDesktopQuery);
  const isLandscape = useMediaQuery(toolbarLandscapeQuery);

  let currentToolbarMinHeight;

  if (isDesktop) {
    currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
  } else if (isLandscape) {
    currentToolbarMinHeight = toolbar[toolbarLandscapeQuery];
  } else {
    currentToolbarMinHeight = toolbar;
  }

  return currentToolbarMinHeight.minHeight;
}
