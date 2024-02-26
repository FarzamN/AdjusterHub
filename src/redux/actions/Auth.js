import AsyncStorage from '@react-native-async-storage/async-storage'
import {GET_PHRASES, GET_TERMS_N_CONDITIONS, LOGOUT, REGISTER, RE_SEND_OTP} from '../reducer/reducer'
import {baseUrl, token} from '../../utils/APIEssentials'
import {clockRunning, log, set} from 'react-native-reanimated'

export const register = (data,setModalVisible3) => {
  console.log('laraib')
  return async (dispatch) => {
    setModalVisible3(true)
    var formdata = new FormData()
    formdata.append('token', token)
    formdata.append('first_name', data.firstName)
    formdata.append('last_name', data.lastName)
    formdata.append('email', data.email)
    formdata.append('password', data.password)
    try {
      const response = await fetch(`${baseUrl}/authentication/register.php`, {
        method: 'post',
        body: formdata,
      })

      const resData = await response.json()
      if (resData.status == true) {
        setModalVisible3(false)
        console.log('====> register', resData)
        await AsyncStorage.setItem('userDetails', JSON.stringify(resData.Data))
        await dispatch({type: REGISTER, payload: resData.Data})
      } else {
        setModalVisible3(false)
        console.log('register else error')
      }
    } catch (error) {
      setModalVisible3(false)
      console.log('register  error', error)
    }
  }
}
export const VerifyEmail = (data, navigation, type,userData) => {
  console.log('first',data)
  return async (dispatch) => {
    var formdata = new FormData()

    formdata.append('token', token)
    formdata.append('email', data?.email != null ? data?.email : userData?.email)

    try {
      const response = await fetch(
        `${baseUrl}/authentication/verify_email_before_registration.php`,
        {
          method: 'post',
          body: formdata,
        },
      )

      const resData = await response.json()
      console.log('======>', resData)

      if (resData.status == true) {
        if (type == 'code') {
          dispatch({type: RE_SEND_OTP, payload: resData.Code})
        } else {
          navigation.navigate('otp', {
            OTP: resData.Code,
            userData: data,
            type: 'Register',
          })
        }
      } else {
        // setModalVisible(true)
        console.log('else VerifyEmail')
      }
    } catch (error) {
      console.log('VerifyEmail error', error)
    }
  }
}
export const LogIn = (data, setModalVisible,setVisible2) => {
  return async (dispatch) => {
    console.log('login data in api', data)
    var formdata = new FormData()
    formdata.append('token', token)
    formdata.append('email', data.email)
    formdata.append('password', data.password)
    try {
      const response = await fetch(`${baseUrl}/authentication/login.php`, {
        method: 'post',
        body: formdata,
      })
      const resData = await response.json()
      
      if (resData.status == true) {
        if(resData.Data.status == 1){
          await AsyncStorage.setItem('userDetails', JSON.stringify(resData.Data))
          await dispatch({type: REGISTER, payload: resData.Data})
        } else if (resData.Data.status == 0){
          await AsyncStorage.removeItem('userDetails')
          await dispatch({type: REGISTER, payload: null})
          setVisible2(true)
        }else{
          console.log('yo');
        }
      } else {
        setModalVisible(true)
      }
    } catch (error) {
      console.log('login error', error)
    }
  }
}
export const LogOut = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('userDetails')
    dispatch({type: LOGOUT, payload: null})
  }
}
export const searchEmail = (data, navigation, setModalVisible, type) => {
  console.log('email', data.email)
  return async (dispatch) => {
    var formdata = new FormData()

    formdata.append('token', token)
    formdata.append('email', data.email)
    try {
      const response = await fetch(
        `${baseUrl}/authentication/verify_email_before_fogetpassword.php`,
        {
          method: 'post',
          body: formdata,
        },
      )
      const resData = await response.json()

      console.log('====> searchEmail', resData)
      if (resData.status == true) {
       
        if (type == 'code') {
          dispatch({type: RE_SEND_OTP, payload: resData.Code})
        } else {
          console.log("type ==>", type);
          navigation.navigate('otp', {
            OTP: resData.Code,
            userData: resData,
            userEmail : data,
            type: 'ResetPass',
          })
        }
      } else {
        setModalVisible(true)
      }
    } catch (error) {
      console.log('searchEmail error', error)
    }
  }
}
export const changePassWord = (data, userid, navigation,setModalVisible2) => {
  return async (dispatch) => {
    console.log("data.password ==>",data.password, userid);
    setModalVisible2(true)
    var formdata = new FormData()
    formdata.append('token', token)
    formdata.append('user_id', userid)
    formdata.append('new_password', data.password)

    try {
      const response = await fetch(
        `${baseUrl}/authentication/update_password.php`,
        {
          method: 'post',
          body: formdata,
        },
      )
      console.log(response);
      const resData = await response.json()
      console.log('====>', resData)

      if (resData.status == true) {
        setTimeout(() => {
          setModalVisible2(false)
          navigation.navigate('login')
        }, 2000)
        dispatch({type: RE_SEND_OTP, payload: null})
        console.log('changePassWord', resData)
      } else {
        alert(resData.message)
        setModalVisible2(false)
      }
    } catch (error) {
      console.log('changePassWord error', error)
      setModalVisible2(false)
    }
  }
}
export const fetchCompanies = async (setData) => {
  var formdata = new FormData()
  formdata.append('token', token)

  try {
    const response = await fetch(`${baseUrl}/get_companies.php`, {
      method: 'post',
      body: formdata,
    })
    const resData = await response.json()
    console.log('====>', resData)
    if (resData.status) {
      setData(resData.Data)
    } else {
      alert(resData.message)
    }
  } catch (error) {
    console.log('fetchCompanies erroe', error)
  }
}
export const get_phrases = () => {
  return async (dispatch) => {
    try {
      let Base_Url = `${baseUrl}/get_phrases.php`
      let myData = new FormData()

      myData.append('token', token)

      const response = await fetch(Base_Url, {
        method: 'post',
        body: myData,
      })

      const responseData = await response.json()
      if (responseData.status == true) {
        dispatch({type: GET_PHRASES, payload: responseData.Data})
      } else {
        console.log('responseData getphrases else')
      }
    } catch (e) {
      console.log('getphrases e', e)
    }
  }
}
export const SubmitFeedback = async (
  claim,
  rating,
  feedback,
  adjuster_id,
  setSuccess,
  setFail,
  navigation,
  setError
) => {
    try {
      let user_data = await AsyncStorage.getItem('userDetails')
      let newData = JSON.parse(user_data)

      let Base_Url = `${baseUrl}/submit_feedback.php`
      let myData = new FormData()

      myData.append('token', token)
      myData.append('user_id', newData.user_id)
      myData.append('adjuster_id', adjuster_id)
      myData.append('feedbacks', JSON.stringify(feedback))
      myData.append('rating', rating)
      myData.append('claim_number', claim)

      const response = await fetch(Base_Url, {
        method: 'post',
        body: myData,
      })

      const responseData = await response.json()
     
      if (responseData.status == true) {
        setSuccess(true)
        console.log('SubmitFeedback ====>', responseData)
        setTimeout(() => {
          navigation.goBack()
        }, 1000);
      } else {
        setError(responseData.message)
        setTimeout(() => {
          setFail(false)
        }, 1800);
        setFail(true)
      }
    } catch (e) {
      console.log('SubmitFeedback errror', e)
    }
  
}
export const update_Profile =  (data, saveimage, setModalVisible,setModalVisible2) => {
  return async dispatch => {
    setModalVisible2(true)
    try {
      let user_data = await AsyncStorage.getItem('userDetails')
      let newData = JSON.parse(user_data)

      let Base_Url = `${baseUrl}/update_profile.php`
      let myData = new FormData()

      myData.append('token', token)
      myData.append('user_id', newData.user_id)
      myData.append(
        'first_name',
       data.firstName,
      )
      myData.append(
        'last_name',
       data.lastName,
      )
      myData.append('email', data.email)
      myData.append('profilepic', saveimage)

      const response = await fetch(Base_Url, {
        method: 'post',
        body: myData,
      })

      const responseData = await response.json()
      console.log('update_Profile ====>', responseData)
      if (responseData.status == true) {
        setModalVisible2(false)
        await AsyncStorage.setItem('userDetails', JSON.stringify(responseData.Data))
        await dispatch({type: REGISTER, payload: responseData.Data})
        setTimeout(() => {
          setModalVisible(true) 
          
        }, 300);
        setTimeout(() => {
          setModalVisible(false) 
          
        }, 2500);
      } else {
        setModalVisible2(false)
        console.log('else error update_Profile')
      }
    } catch (e) {
      setModalVisible2(false)
      console.log('SubmitFeedback errror', e)
    }
  }
}
export const create_Adjuster = async (data,image,company_id,setSuccess,setLoading,setFailed, navigation, setErrorMessage) => {
   
  setLoading(true)
    try{
      let Base_Url = `${baseUrl}/create_new_adjuster_request.php`
      let myData = new FormData()
    
      
      myData.append('token', token)
      myData.append('company_id', company_id)
      myData.append('first_name', data.first_name)
      myData.append('last_name', data.last_name)
      myData.append('email', data.email ? data.email : null)
      myData.append('business_card', image)
      
      
    const response = await fetch(Base_Url,{
      method: 'POST',
      body: myData
    })
    console.log("===================================");
    console.log("===>", response);
    console.log("===================================");
    const responseData = await response.json()
      console.log('response',response);
      
      console.log('third');

      console.log('responseData',responseData);
      if(responseData.status == true){
        setLoading(false)
        setTimeout(() => {
          setSuccess(true) 
          
        }, 300);
        setTimeout(() => {
          navigation.goBack() 
          
        }, 2500);
        
      }else{
        setTimeout(() => {
          setErrorMessage(responseData.message)
          setFailed(true)
          
        }, 300);
        setTimeout(() => {
          setFailed(false)
          
        }, 2500);
        setLoading(false)
        console.log('else error');
      }
    }catch(e){
      setFailed(true)
      setLoading(false)
      console.log('create_Adjuster error',e)
    }
  
}
export const check_account =  (user_id,setVisible2) => {
  return async (dispatch) => {
    try{
      let myData = new FormData()
      myData.append('token', token)
      myData.append('user_id', user_id)


      const response = await fetch(`${baseUrl}/authentication/check_user_status.php`, {
        method: 'post',
        body: myData,
      })

    
      const responseData = await response.json()
      console.log('responseData',responseData);

      if (responseData.status == true) {
        if(responseData.Data.status == 0){
          await AsyncStorage.removeItem('userDetails')
          await dispatch({type: REGISTER, payload: null})
          setVisible2(true)
        }else{
          console.log('yo');
        }
      } else {
        console.log('check_account else');
      }
    }catch(e){
      console.log('error check_account',e);
    }
  }
}

export const fetchTermsnConditions = () => {
  return  async dispatch => {
    let Base_Url = `${baseUrl}/get_terms.php`
    let myData = new FormData()
    myData.append('token', token)
    try {
      const response = await fetch(Base_Url,{
        method: 'POST',
        body: myData
      })
  
      const responseData = await response.json()
      dispatch({type : GET_TERMS_N_CONDITIONS, payload : responseData.data})
    } catch (error) {
    console.log("Terms n Conditions Error ==>", error
    );
    }
  }
} 