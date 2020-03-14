
const Users = [
    { Name: 'KRISHNA', Password: '1996', Email: 'krishna@gmail.com' },
    { Name: 'sri', Password: '1234', Email: 'sri@hawkmail.newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}