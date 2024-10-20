import React from 'react';
import img from "E:/Kenil/CommWhale/Front-end/comm-whale/src/Assests/image.jpg";
import "../CSS/Event/Event.css";

export default function Event() {
  return (
    <>
        <div className="event_page_image">
            <img src={img} alt="Main Event Image" />
        </div>
        <div className="event_description">
          <div className="event_name">Navratri</div>
          <div className="event_location"> <h3><span>Location:&emsp;</span>Chemnitz</h3></div>
          <div className="event_information">
            <h2>Description</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, ratione officia 
              explicabo earum provident harum in! Error laudantium, consectetur ipsum atque quia 
              similique, minus unde libero numquam quos soluta reiciendis in dignissimos suscipit 
              odit reprehenderit assumenda sapiente nam placeat quis veritatis eligendi! Labore 
              perferendis temporibus molestias fugiat. Repellat unde expedita cupiditate nam ipsam 
              nisi, quam magni blanditiis sint asperiores soluta itaque omnis doloribus laudantium. 
              Eius magnam veniam alias iste impedit consequuntur eligendi repellendus quidem iusto autem, 
              quasi ullam dolor totam asperiores ducimus. Magnam non, obcaecati ex quia tempora natus 
              unde voluptas sit deleniti aperiam quis eveniet a, necessitatibus officiis quisquam 
              voluptatem beatae cum perspiciatis, repudiandae at ut similique. Laudantium eum, aspernatur 
              ullam dolores officia accusamus tempore similique provident reiciendis modi vitae eligendi 
              dolore dignissimos sit ab. Aspernatur accusantium mollitia in error nemo enim, dolorum 
              libero architecto accusamus perspiciatis vitae velit ullam quae voluptas sequi ipsum 
              voluptates modi iure placeat sapiente voluptatem nisi, deserunt iste? Iusto, doloremque! 
              Exercitationem numquam similique rerum obcaecati quos accusantium veritatis facere magni 
              voluptates voluptatibus, dignissimos iste praesentium ex, dicta delectus eum architecto, 
              provident sed culpa incidunt consequatur? Quasi numquam odit quae corrupti molestiae veniam 
              vel, adipisci facere deserunt accusantium? Sit ea animi quod amet impedit porro.</p>
          </div>
          <div className="event_book">
            <div className="event_type">
            <h3><span>Type:&emsp;</span>Festival</h3>
              </div>
            <div className="event_price">
            <h3><span>Price (Per Person): &emsp;</span>25€</h3>
              </div>
            <div className="participants">
              <h3>Add Participant:</h3>

            
            </div>
          </div>
        </div>
    </>
  );
}
