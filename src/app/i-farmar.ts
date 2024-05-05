export interface IFarmar {
  fname:String,
  lname: String,
  email:String,
  password:String,
  phone:Number,
  address:String,
  farmaddress:String,
  farmarea:Number,
  cropamount:Number,
  croptype:String,
  farmingExperience:Number,
  img:String,
  order?: Array<object>;
  _id:string


}
