import { Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: {
        type: String, required: true, 
        validate: {
            validator: function (v: string) {
                /**
                 * Has minimum 8 characters in length. Adjust it by modifying {8,}
                 * At least one uppercase English letter. You can remove this condition by removing (?=.*?[A-Z])
                 * At least one lowercase English letter.  You can remove this condition by removing (?=.*?[a-z])
                 * At least one digit. You can remove this condition by removing (?=.*?[0-9])
                 * At least one special character,  You can remove this condition by removing (?=.*?[#?!@$%^&*-])
                 */
                return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(v);
            },
            message: 'Has minimum 8 characters in length. At least one uppercase English letter. At least one lowercase English letter. At least one digit. You can remove this condition by removing (?=.*?[0-9]).At least one special character',
        },
    },
    isAdmin : {type : Boolean, default : false}
}, { timestamps: true });

UserSchema.post('validate', function (user) {
    const unhashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(unhashedPassword, salt);
})

export const User = models?.User || model('User', UserSchema);