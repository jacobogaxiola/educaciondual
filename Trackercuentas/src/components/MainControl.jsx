import { useState } from "react";
import Balance from "./DisplayItems";
import DisplayItems from "./FormAddSubs";
import FormAddSubs from "./FormAddSubs";

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState("");
  const [price, subPrice] = useState("");
  const [editId, setEditId] = useState("");
  const [spent, subSpent] = useState("");

  const eliminarItem = (id) => {
    const newList = subs.filter((item) => item.id != id);
    setSubs(newList);
  };

  const editItem = (id) => {
    setEditId(id);
    subs.map((item) => {
      setType(item.type);
      setPrice(item.price);
    });
  };

  return (
    <>
      <div className="main-form">
        <Balance count={count} subs={subs} spent={spent} setSpent={setSpent} />
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
          editId={editId}
          setEditId={setEditId}
          spent={spent}
          count={count}
        />
      </div>
      <DisplayItems
        subs={subs}
        eliminarItem={eliminarItem}
        editItem={editItem}
      />
    </>
  );
};
export default MainControl;
