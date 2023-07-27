import { Stack, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { activateCat } from "../actions";
const LeftBar = () => {
  const catList = useSelector((state) => state.catsReducer);

  const dispatch = useDispatch();
  const handleClick = (cat) => {
    dispatch(activateCat({ _id: cat._id }));
  };
  return (
    <Stack width={{ xs: "100%", sm: "100%", md: "20%" }}>
      {catList.data === null ? (
        <Typography>No cats to Show</Typography>
      ) : catList.data.length === 0 ? (
        <Typography>No cats to Show</Typography>
      ) : (
        <Stack border="1px solid rgba(0,0,0,0.2)">
          {catList.data.map((cat) => (
            <Button
              style={{ backgroundColor: cat.catActive ? "#1976d2" : "" }}
              key={cat._id}
              sx={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "0" }}
              onClick={() => handleClick(cat)}
            >
              <Stack
                width="100%"
                padding="5px"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  color="rgba(0,0,0,0.8)"
                  style={{ textTransform: "capitalize" }}
                >
                  {cat.catName}
                </Typography>
                <Typography
                  borderRadius="10px"
                  padding="0 8px"
                  color="white"
                  backgroundColor={
                    cat.catActive ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.4)"
                  }
                >
                  {cat.catClicks}
                </Typography>
              </Stack>
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default LeftBar;
