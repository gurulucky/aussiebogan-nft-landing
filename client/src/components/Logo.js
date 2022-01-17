import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ header = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  if (header) {
    return (
      <Box component='img' src='/static/logo_header.png' sx={{ width: 128, height: 'auto', ...sx }} />
    );
  } else {
    return (
      <Box component='img' src='/static/logo.png' sx={{ width: 64, height: 64, ...sx }} />
    );
  }
}
