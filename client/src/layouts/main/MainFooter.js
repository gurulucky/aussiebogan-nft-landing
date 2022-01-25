import { Icon } from '@iconify/react';
import discordFill from '@iconify/icons-akar-icons/discord-fill';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../routes/paths';
//
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'Discord', icon: discordFill, href: 'https://discord.com/invite/dHSKjeGr' },
  { name: 'Twitter', icon: twitterFill, href: 'https://twitter.com/boganclub' },
  { name: 'Instagram', icon: instagramFill, href: 'https://www.instagram.com/aussie_bogan_club/' }
];

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: 'about' },
      { name: 'FAQs', href: 'faq' }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              In celebration of the contribution of your fellow bogan The Right Honourable Chief Justice Bogan AC QC ABC Esq. has officially launched the Aussie Bogan Club (ABC).
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <a href={`${social.href}`} target='_blank'>
                  <IconButton color='primary' size='small'>
                    <Icon icon={social.icon} />
                  </IconButton>
                </a>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>

                    {children.map((link) => {
                      if (link.href.includes('/')) {
                        return <Typography
                          to={link.href}
                          key={link.name}
                          color="inherit"
                          variant="body2"
                          component={RouterLink}
                          spy={true}
                          smooth={true}
                          sx={{ display: 'block', cursor: 'pointer' }}
                        >
                          {link.name}
                        </Typography>
                      } else {
                        return <Typography
                          to={link.href}
                          key={link.name}
                          color="inherit"
                          variant="body2"
                          component={ScrollLink}
                          spy={true}
                          smooth={true}
                          sx={{ display: 'block', cursor: 'pointer' }}
                        >
                          {link.name}
                        </Typography>

                      }
                    }
                    )}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          © 2022. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
