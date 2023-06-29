type Repository = {
    id: number;
    name: string;
    full_name: string;
};

export default async function Page() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    return  <>
    <h1>User list:</h1>
    <h1>First Name: {data.results[0].name.first}</h1>
    <h1>Last Name: {data.results[0].name.last}</h1>
    <h1>Gender: {data.results[0].gender}</h1>
    <h1>Street Address: {data.results[0].location.street.number}, {data.results[0].location.street.name}</h1>
    <h1>Zip Code: {data.results[0].location.postcode}</h1>
    <h1>City: {data.results[0].location.city}</h1>
    <h1>State: {data.results[0].location.state}</h1>
    <h1>DOB: {data.results[0].dob.date}</h1>
    <h1>Age: {data.results[0].dob.age}</h1>
    <h1>Email: {data.results[0].email}</h1>
    <h1>Picture Id: {data.results[0].picture.large}</h1>
    </>
}