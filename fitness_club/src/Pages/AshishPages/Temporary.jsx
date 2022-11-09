import { useEffect, useState } from "react";
import axios from "axios";
export default function Temporary() {

    const [value, setValue] = useState("");
    const [post, setPost] = useState([]);
  
  
  
  
    //2nd Api
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    useEffect(() => {
      //Food
      const options = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?page=2&limit=2",
        params: { ingr: value },
        headers: {
          "X-RapidAPI-Key": "7f05e07b5bmshb869046befc8649p1fd334jsn35099610d923",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
  
      //Exersice
      // const options = {
      //   method: 'GET',
      //   url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?limit=20',
      //   params: { muscle: value },
      //   headers: {
      //     'X-RapidAPI-Key': '7f05e07b5bmshb869046befc8649p1fd334jsn35099610d923',
      //     'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      //   }
      // };
  
  
      // New Exercise :- working for select this
      // const options = {
      //   method: 'GET',
      //   url: 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned',
      //   params: {activity: value},
      //   headers: {
      //     'X-RapidAPI-Key': '7f05e07b5bmshb869046befc8649p1fd334jsn35099610d923',
      //     'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
      //   }
      // };
  
  
  
  
  
      axios
        .request(options)
        .then(function (response) {
          //fOOD
          console.log(response.data);
          console.log(response.data.hints);
          setPost(response.data.hints);
  
          //Exercise
          // console.log(response.data);
          // setPost(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, [value]);
  
    const handleClick = () => {
      console.log(value);
      console.log(post);
      setValue("")
      setPost([])
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>

            {/* //Food */}
            <div>
                <h1>Food</h1>
                <div style={{
                    margin: "auto",
                    height: "400px",
                    width: "400px",
                    marginTop: "5px",
                    border: '1px solid white',
                    overflowY: "auto"
                }}>
                    {post &&
                        post.map((ele) => (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    flexDirection: "column",
                                    margin: "auto",
                                    marginTop: "5px",
                                    border: '1px solid white',
                                    background: "teal",
                                }}
                            >
                                <div>
                                    {" "}
                                    <h1>{ele.food.label}</h1>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignContent: "center",
                                        m: "auto",
                                        background: "olive",
                                        border: '1px solid white'
                                    }}
                                >
                                    <p>ENERC_KCAL:- {+ele.food.nutrients.ENERC_KCAL}g</p>
                                    <p>Fat:- {+ele.food.nutrients.FAT}g</p>
                                    <p>PROCNT:- {+ele.food.nutrients.PROCNT}g</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* //Exersice */}
            {/* <div>
        {
          post.map((ele) => (
            <h1>{ele.name}</h1>
          ))
        }
      </div> */}

        </div>
    )
}