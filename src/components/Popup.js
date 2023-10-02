import React from "react";
import classes from "./Popup.module.css";
function Popup(props,) {
  return props.trigger ? (
    <div className={classes.popup}>
      <div className={classes.inner_popup}>
        <div className={classes.main_title}>
          <h3>Theme color</h3>
          <h4>Change theme</h4>
        </div>
        <div className={classes.item_container}>
        <div className={classes.row}>
            <p>Font Color</p>
            <div className={classes.options}>
              <span>#44444</span>
              <button className={`${classes.box} ${classes.black}`}></button>
            </div>
          </div>
          <div className={classes.row}>
            <p>Background Color</p>
            <div className={classes.options}>
              <span>#FFFFF</span>
              <button className={`${classes.box} ${classes.blue}`}></button>
            </div>
          </div>
          <div className={classes.row}>
            <p>Button Color</p>
            <div className={classes.options}>
              <span>#2072EF</span>
              <button className={`${classes.box} ${classes.blue}`}></button>
            </div>
          </div>
          <div className={classes.row}>
            <p>Button Border Color</p>
            <div className={classes.options}>
              <span>#2072EF</span>
              <button className={`${classes.box} ${classes.blue}`}></button>
            </div>
          </div>
          <div className={classes.row}>
            <p>Buttons MouseOver Color</p>
            <div className={classes.options}>
              <span>#0053D</span>
              <button className={`${classes.box} ${classes.darkblue}`}></button>
            </div>
          </div>
        </div>
        <div className={classes.btn_group}>
          <div
            className={classes.close_btn}
            onClick={() => props.setTrigger(!true)}
          >
            <p>Close</p>
          </div>
          <button className={classes.save}> Save</button>
        </div>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
