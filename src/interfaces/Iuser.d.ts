
type backInfo={
        phone:string,
        passWord:string,
        message:string,
        code:number
}
export default interface ILoginFrom{
    user:backInfo
    login:(param:object)=>void
}