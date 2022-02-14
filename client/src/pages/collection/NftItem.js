import { Grid, Container, Stack, CardContent, Typography, CardActions, Box } from "@material-ui/core"

import { StyledCard } from "../styled/StyledInput"

export default function NftItem({nft}) {
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ my: "10px" }}>
            <Container sx={{ maxWidth: "360px", minWidth: "300px" }}>
                <StyledCard>
                    <CardContent sx={{ py: "4px" }}>
                        <Stack justifyContent="center" alignItems="center" sx={{ height: "360px", backgroundColor: "rgb(43 43 43)" }}>
                            <img src={nft.image || '/empty.png'} title="Ryoshi Vision" alt="nft" style={{ display: "block", maxWidth: "360px", maxHeight: "360px", width: "auto", height: "auto" }} />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="body1" color="rgb(221, 221, 221)">
                                {`${nft.name}`}
                            </Typography>
                        </Stack>
                        {/* <Typography variant="body1" color="rgb(221, 221, 221)">
                            {nft.description}
                        </Typography> */}
                    </CardContent>
                    <CardActions>
                        <Box sx={{ flexGrow: 1 }} />
                        <a href={`https://testnets.opensea.io/assets/0x4c45442f7513418ce84979d8b669259f5aff7b8f/${nft.tokenId}`} target='_blank' rel='noreferrer' style={{ color: "white" }}>View on opensea</a>
                    </CardActions>
                </StyledCard>
            </Container>
        </Grid >
    )
}