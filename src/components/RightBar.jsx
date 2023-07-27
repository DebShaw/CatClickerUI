import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, TextField, Button } from "@mui/material";
import { addCat, updateCat } from "../actions";

const RightBar = () => {
  const catList = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const [active, setActive] = useState([]);
  const [catName, setName] = useState("");
  const [catImageURL, setImage] = useState("");
  const [clicks, setClicks] = useState("");
  const [catNicks, setCatNicks] = useState("");
  const [open, setOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isSave, setIsSave] = useState(false);

  if (
    !isChange &&
    !isSave &&
    active.length === 1 &&
    (catName !== active[0].catName || clicks !== active[0].catClicks)
  ) {
    setName(active[0].catName);
    setImage(active[0].catImageURL);
    setClicks(active[0].catClicks);
    setCatNicks(active[0].catNicks.join(" "));
  }

  useEffect(() => {
    if (catList.data !== null) {
      setActive(catList.data.filter((cat) => cat.catActive));
    }
    if (!isSave && active.length === 1) {
      setName(active[0].catName);
      setImage(active[0].catImageURL);
      setClicks(active[0].catClicks);
      setCatNicks(active[0].catNicks.join(" "));
    }
    //eslint-disable-next-line
  }, [catList]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsChange(true);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
    setIsChange(true);
  };
  const handleClicksChange = (e) => {
    setClicks(e.target.value);
    setIsChange(true);
  };
  const handleNicksChange = (e) => {
    setCatNicks(e.target.value);
    setIsChange(true);
  };
  const handleCancel = () => {
    setName(active[0].catName);
    setImage(active[0].catImageURL);
    setClicks(active[0].catClicks);
    setCatNicks(active[0].catNicks.join(" "));
    setOpen(false);
  };
  const handleSave = () => {
    setIsSave(true);
    const catClicks = +clicks;
    const catAge =
      catClicks <= 5
        ? "Infant"
        : catClicks <= 12
        ? "Child"
        : catClicks <= 25
        ? "Young"
        : catClicks <= 40
        ? "Middle-Age"
        : catClicks <= 60
        ? "Old"
        : "Very-Old";
    if (
      active.length === 1 &&
      active[0].catName === catName &&
      active[0].catImageURL === catImageURL &&
      active[0].catClicks === catClicks &&
      catNicks === active[0].catNicks.join(" ")
    ) {
      alert("Change the value of at least on of the given fields first!");
    } else if (active.length === 0 || active[0].catName !== catName) {
      dispatch(
        addCat({
          catName,
          catImageURL,
          catClicks,
          catAge,
          catNicks: catNicks.split(","),
        })
      );
    } else if (
      active[0].catImageURL !== catImageURL ||
      active[0].catClicks !== catClicks ||
      catNicks !== active[0].catNicks.join(" ")
    ) {
      dispatch(
        updateCat(active[0]._id, {
          catImageURL,
          catClicks,
          catAge,
          catNicks: catNicks.split(","),
        })
      );
    }
    setOpen(false);
  };

  return (
    <Stack
      width={{ xs: "100%", sm: "100%", md: "20%" }}
      spacing={6}
      padding="10px"
      border={open ? "1px solid rgba(0,0,0,0.2)" : "none"}
    >
      <Button width="100%" variant="contained" onClick={() => setOpen(true)}>
        Open New Form
      </Button>
      {open && (
        <Stack spacing={2}>
          <TextField
            label="Cat Name"
            value={catName}
            onChange={(e) => handleNameChange(e)}
          ></TextField>
          <TextField
            label="Cat Image"
            value={catImageURL}
            onChange={(e) => handleImageChange(e)}
          ></TextField>
          <TextField
            label="Cat Clicks"
            value={clicks}
            onChange={(e) => handleClicksChange(e)}
          ></TextField>
          <TextField
            label="Cat Nick Names"
            value={catNicks}
            onChange={(e) => handleNicksChange(e)}
          ></TextField>
          <Stack direction="row" spacing={2}>
            <Button
              size="large"
              style={{ backgroundColor: "#4caf50", color: "white" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              size="large"
              style={{ backgroundColor: "#ef5350", color: "white" }}
              onClick={handleCancel}
            >
              Undo
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default RightBar;
