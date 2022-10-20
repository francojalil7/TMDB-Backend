import User from "./User"
import Fav from "./Fav"

Fav.belongsTo(User);
export default {User, Fav};