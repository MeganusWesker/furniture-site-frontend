import React, { Fragment, useState, useEffect } from "react";
import "./UpadtePassword.css"
import Loader from "../layout/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import {useHistory} from "react-router-dom";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import{ UPDATE_PASSWORD_RESET} from '../../constants/userConstants'
import {passwordToggle} from "../utils/passwordToggler";


const UpdatePassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  let history = useHistory();
  

  

  const {error,isUpdated,loading} =useSelector(state=> state.profile);

   const [oldPassword, setOldPassword] = useState("")
   const [newPassword, setNewPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   
 
   const  updatePasswordSubmit  = (e) =>{
      e.preventDefault();
 
      const myform = new FormData();
 
      myform.set('oldPassword',oldPassword);
      myform.set('newPassword',newPassword);
      myform.set('confirmPassword',confirmPassword);
      dispatch(updatePassword(myform));
    
    }

    const passwordToggleHelper=()=>{
      let passwordFiled = document.querySelectorAll(".password");
      passwordToggle(passwordFiled);
    }
 
 
    
 
   useEffect(() => {



      if(error){
       alert.error(error)
       dispatch(clearErrors());
      }

      if(isUpdated){
      alert.success("Password has been updated");
       history.push('/account')

       dispatch({
           type: UPDATE_PASSWORD_RESET
       })
     }

    }, [error,dispatch,alert,isUpdated,history]);
  return (
    <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title="change Password" />
            <div className="updatePasswordContainer">
              <div className="updatePasswordBox">
                <h2 className="updatePasswordHeading">Update Profile</h2>
  
                <form
                  className="updatePasswordForm"
                  encType="multipart/form-data"
                  onSubmit={updatePasswordSubmit}
                >
                   <div className="loginPassword">
                  <VpnKeyIcon onClick={passwordToggleHelper}/>
                  <input
                    type="password"
                    placeholder="Old Password"
                    className='password'
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>

                   <div className="loginPassword">
                  <LockOpenIcon  onClick={passwordToggleHelper} />
                  <input
                    type="password"
                    placeholder="New Password"
                    className='password'
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                   <div className="loginPassword">
                  <LockIcon onClick={passwordToggleHelper} />
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
                    value="change"
                    className="updatePasswordBtn"
                  />
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
  )
}

export default UpdatePassword


