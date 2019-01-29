
type backInfo={
    getInfo:{
        status:number,
        message:string,
        data:object
    }
}
export default interface ILoginFrom{
    user:backInfo|undefined
    login:(param:object)=>void
}