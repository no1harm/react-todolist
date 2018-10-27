import AV from 'leancloud-storage'

var APP_ID = 'RPWGaqvaJi7fUh3HBoT6TqP4-gzGzoHsz';
var APP_KEY = '520Y7aeHCJycPnBzxymEb2Ya';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV

export const TodoModel = {
  create({status, title, deleted}, successFn, errorFn){
    let Todo = AV.Object.extend('Todo')
    let todo = new Todo()
    todo.set('title', title)
    todo.set('status', status)
    todo.set('deleted', deleted)
    todo.save().then(function (response) {
      successFn.call(null, response.id)
    }, function (error) {
      errorFn && errorFn.call(null, error)
    });
   },
  update(){
   },
  destroy(){
   }
}

export function signUp(email, username, password, successFn, errorFn){
  // 新建 AVUser 对象实例
 var user = new AV.User()
 // 设置用户名
 user.setUsername(username)
 // 设置密码
 user.setPassword(password)
 // 设置邮箱
 user.setPassword(email)
 user.signUp().then(function (loginedUser) {
   let user = getUserFromAVUser(loginedUser)
   successFn.call(null, user)
 }, function (error) {
   errorFn.call(null, error)
 })

 return undefined

}

export function signIn(username, password, successFn, errorFn){
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })
}

export function getCurrentUser(){
  let user = AV.User.current()
  if(user){
    return getUserFromAVUser(user)
  }else{
    return null
  }
}


function getUserFromAVUser(AVUser){
 return {
   id: AVUser.id,
   ...AVUser.attributes
 }
}

export function signOut(){
  AV.User.logOut()
  return undefined
}

export function sendPasswordResetEmail(email, successFn, errorFn){
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call() 
  }, function (error) {
    errorFn.call(null, error)
  })
}