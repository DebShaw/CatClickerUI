import { useSelector, useDispatch } from "react-redux";
import { Stack, Grid, Typography, Button } from "@mui/material";
import { activateCat, incrementClicks } from "../actions";

const BottomBar = () => {
  const catList = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const handleClick = (cat) => {
    dispatch(activateCat({ _id: cat._id }));
    dispatch(incrementClicks({ _id: cat._id, catClicks: cat.catClicks + 1 }));
  };

  return (
    <Stack padding="1rem 0.5rem" borderTop="1px solid rgba(0,0,0,0.2)">
      <Typography
        variant="h4"
        padding="1rem"
        borderTop="1px solid rgba(0,0,0,0.2)"
      >
        Cats Image Gallery
      </Typography>
      <Grid container spacing={2} justifyContent="space-evenly">
        {catList.data === null ? (
          <Typography>No Cats Added</Typography>
        ) : (
          <>
            {catList.data.map((cat) => (
              <Grid item key={cat._id}>
                <Stack>
                  <Button
                    href="#center"
                    style={{ textDecoration: "none", padding: "0" }}
                    onClick={() => handleClick(cat)}
                  >
                    <Stack
                      border="1px solid rgba(0,0,0,0.2)"
                      direction="column"
                      justifyContent="left"
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bolder"
                        color="rgba(0,0,0,0.8)"
                        textTransform="capitalize"
                        padding="10px 0 0 10px"
                        textAlign="left"
                      >
                        {cat.catName}
                      </Typography>
                      <Typography
                        color="rgba(0,0,0,0.8)"
                        padding="0 0 10px 10px"
                        textTransform="capitalize"
                        textAlign="left"
                      >
                        No. of times clicked: {cat.catClicks}
                      </Typography>
                      <img
                        src={cat.catImageURL}
                        style={{ width: "330px", height: "175px" }}
                        alt="cat-logo"
                      ></img>
                      <Stack direction="row">
                        <Typography
                          color="rgba(0,0,0,0.8)"
                          textTransform="capitalize"
                          padding="10px 0 0 10px"
                          textAlign="left"
                        >
                          Nick Names:{" "}
                        </Typography>
                        {cat.catNicks.map((nicks) => (
                          <Typography
                            key={nicks}
                            color="rgba(0,0,0,0.8)"
                            textTransform="capitalize"
                            padding="10px 0 0 10px"
                            textAlign="left"
                          >
                            {nicks}
                          </Typography>
                        ))}
                      </Stack>
                      <Typography
                        color="rgba(0,0,0,0.8)"
                        textTransform="capitalize"
                        padding="10px 0 10px 10px"
                        textAlign="left"
                      >
                        Age Category: {cat.catAge}
                      </Typography>
                    </Stack>
                  </Button>
                </Stack>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Stack>
  );
};

export default BottomBar;
