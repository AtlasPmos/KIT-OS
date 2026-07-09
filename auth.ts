export function authIsEnforced(){return process.env.KINTA_AUTH_ENFORCED==="true"}
export async function getSessionStatus(){if(!authIsEnforced())return {authenticated:true,mode:"dev-bypass",user:{email:"dev@kinta.local"}};return {authenticated:false,mode:"auth-placeholder",user:null}}
