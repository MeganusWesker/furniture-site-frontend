import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css"
import Loader from "../layout/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory, useParams } from "react-router-dom";
import { passwordToggle } from "../utils/passwordToggler";



const ResetPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  let history = useHistory();
  const params = useParams();



  const { error, success, loading } = useSelector(state => state.forgotPassword);


  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myform = new FormData();


    myform.set('password', password);
    myform.set('confirmPassword', confirmPassword);
    dispatch(resetPassword(params.token, myform));

  }


  const passwordToggleHelper = () => {
    let passwordFiled = document.querySelectorAll(".password");
    passwordToggle(passwordFiled);
  }

  useEffect(() => {



    if (error) {
      alert.error(error)
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("password has been updated");
      history.push('/login')
    }

  }, [error, dispatch, alert, success, history]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Reset Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Update Profile</h2>

              <form
                className="resetPasswordForm"
                encType="multipart/form-data"
                onSubmit={resetPasswordSubmit}
              >


                <div >
                  <LockIcon onClick={passwordToggleHelper} />
                  <input
                    type="password"
                    placeholder="New Password"
                    className='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div >
                  <LockOpenIcon onClick={passwordToggleHelper} />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className='password'
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>



                <input
                  type="submit"
                  value="update"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default ResetPassword
