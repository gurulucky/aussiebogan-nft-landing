import { Grid, Container, Stack, CardContent, Typography, CardActions, Box, Button } from "@material-ui/core"
import LockIcon from '@mui/icons-material/Lock';

import { StyledCard } from "../styled/StyledInput"

export default function NftItem({ nft }) {
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ my: "10px" }}>
            <Container sx={{ maxWidth: "360px", minWidth: "300px" }}>
                <StyledCard>
                    <CardContent sx={{ py: "4px" }}>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: "360px", backgroundColor: "rgb(43 43 43)" }}>
                            {/* <a href={nft.metadataUri} target='_blank'> */}
                            <img src={nft.image || '/empty.png'} title={nft.name} alt="nft" style={{ display: "block", maxWidth: "360px", maxHeight: "360px", width: "auto", height: "auto" }} />
                            {/* </a> */}
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '10px' }}>
                            <Typography gutterBottom variant="body1" color="rgb(221, 221, 221)">
                                {`${nft.name}`}
                            </Typography>
                            <a href={nft.metadataUri} target='_blank' style={{ textDecoration: 'none' }}>
                                <Typography gutterBottom variant="body1" color="rgb(221, 221, 221)">
                                    Metadata
                                </Typography>
                            </a>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant="caption" color="rgb(221, 221, 221)">
                                {`Rarity Score: ${nft.rarityScore}`}
                            </Typography>
                            <Typography variant="caption" color="rgb(221, 221, 221)">
                                {`Token ID: ${nft.tokenId}`}
                            </Typography>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <a href={nft.highUri} download target='_blank' style={{ textDecoration: 'none' }}>
                            <Button color='primary' startIcon={<LockIcon />}>Unlockable content</Button>
                        </a>
                        <Box sx={{ flexGrow: 1 }} />
                        <a href={`https://testnets.opensea.io/assets/0xfFA4683b9aC4aAD95416804f4cac0e23f527F63c/${nft.tokenId}`} target='_blank' rel='noreferrer' style={{ color: "white" }}>View on OpenSea</a>
                    </CardActions>
                </StyledCard>
            </Container>
        </Grid >
    )
}