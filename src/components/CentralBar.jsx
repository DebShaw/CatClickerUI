import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { incrementClicks } from "../actions";

const CentralBar = () => {
  const catList = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const [activeCat, setActiveCat] = useState([]);

  useEffect(() => {
    if (catList.data !== null) {
      setActiveCat(catList.data.filter((cat) => cat.catActive === true));
    }
  }, [catList]);

  const handleClick = () => {
    dispatch(
      incrementClicks({
        _id: activeCat[0]._id,
        catClicks: activeCat[0].catClicks + 1,
      })
    );
  };

  return (
    <Stack id="center">
      {activeCat.length !== 0 ? (
        <Button sx={{ padding: "0" }} onClick={handleClick}>
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
              {activeCat[0].catName}
            </Typography>
            <Typography
              color="rgba(0,0,0,0.8)"
              padding="0 0 10px 10px"
              textTransform="capitalize"
              textAlign="left"
            >
              Number of times clicked: {activeCat[0].catClicks}
            </Typography>
            <img
              src={activeCat[0].catImageURL}
              style={{ width: "400px", height: "175px" }}
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
              {activeCat[0].catNicks.map((nicks) => (
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
              Age Category: {activeCat[0].catAge}
            </Typography>
          </Stack>
        </Button>
      ) : (
        <Typography>No Active Cats</Typography>
      )}
    </Stack>
  );
};

export default CentralBar;
