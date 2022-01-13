import { useState } from 'react';
// material
import { useTheme, styled, alpha } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown, varFadeInRight } from '../../animate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ----------------------------------------------------------------------
const FAQ_DATA = [
  {
    title: "Lorem ipsum dolor sit amet,",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
  },
  {
    title: "Nunc maximus, magna at ultricies elementum",
    content:
      "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
  },
  {
    title: "Curabitur laoreet, mauris vel blandit fringilla",
    content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
  },
  {
    title: "What is the package version",
    content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
    Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
    Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
    Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15)
  }
}));

export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <RootStyle>
        <Box sx={{ mb: 5 }}>
          <MotionInView variants={varFadeInDown}>
            <Typography className='flux_title' variant="h2" textAlign='center' color='primary.main' sx={{ mb: 3 }}>
              Faq
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInRight}>
            {
              FAQ_DATA.map((item, index) =>
                <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
                  sx={{
                    border: '1px solid #1CCAFF',
                    backgroundImage: 'repeating-linear-gradient(45deg,#0b1414,#0b1414 10px,#061724 10px,#061724 20px)'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                  >
                    <Typography variant='h4' color='primary.main' sx={{ width: '90%', flexShrink: 0 }}>
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='h6'>
                      {item.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            }
          </MotionInView>
        </Box>
    </RootStyle>
  );
}
