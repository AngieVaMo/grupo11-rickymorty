import Card from "./Card"
import styled from "styled-components"

const CardsContainer = () => {
    
    
let arr = [{id: 1,name: "Juan", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaKSzDxYs5h688ljfy0SPQMJXo8KnY6Hcug&usqp=CAU", status: "Alive", location: "Paraná"},{id: 2, name:"Martin San Juan", url:"https://www.cronista.com/files/image/296/296981/5ffe0bca443ed.jpg", status:"Alive", location: "Madrid"},{id: 3, name:"Lucas Iglesia", url:"https://img.niadd.com/manga3/55/10037686/100312320/4188949_2021070511806.png", status:"Alive", location: "Santa Fe"},{id: 4, name:"Enri Torres", url:"https://resizer.glanacion.com/resizer/LIdhOl_47j_oyrDWR0IjuaXdT-g=/1200x746/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4JODY5QDBZAZFM5HSWO7AVVY5I.jpg", status:"Alive", location: "Huinca Renanco"},{id: 5, name:"Edwin Andres Higuita", url:"https://www.clarin.com/img/2021/07/07/emiliano-martinez-tapa-el-penal___kgfIQMsBe_640x361__1.jpg", status:"Alive", location: "Colombia"},{id: 6,name:"Rogelio Ramirez Camona", url:"data:image/jpeg;base64,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", status:"Alive", location: "Santiago de Cali"}]

    const Contenedor = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    
    return (
        <Contenedor>
            {arr.map( obj => <Card url={obj.url} name={obj.name} status={obj.status} location={obj.location}/>)}
        </Contenedor>
    )
}

export default CardsContainer