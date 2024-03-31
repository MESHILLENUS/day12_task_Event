const API="https://6604ddd02ca9478ea17ea391.mockapi.io/user"

//GET (READ the data)
// APT HANDLERS

async function getAllUsers()
{
    const res = await fetch(API,{
        method:"GET",
      });
    const data=await res.json();
    console.log(data);
}

// Post - ( create )

async function addNewUser(newdata)
{
    const res = await fetch(API,
    
    {
        method:"POST",
        body:JSON.stringify(newdata),
        headers:
        {
            "Content-Type" : "applicataion/json",
        }
    });
    const data= await res.json();
    console.log(data);

    
}
//put-(update)
async function updateUser(id,updatedUser)
{
    const res = await fetch(`${API}/${id}`,{
     method:   
    })
}
//delete

async function deleteUser(id)
{
    const res=await fetch(`${API}/${id}`,{
        method:"DELETE",
    });
}
// Handlers invokations
const dummy_data=
{
    name:"name6",
    contact: 247246,
    batch:"batch 6",
};

//addNewUser(dummy_data);
getAllUsers();