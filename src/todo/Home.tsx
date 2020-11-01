import React from "react";
import {IonPage,IonToolbar,IonHeader,IonTitle,IonContent,IonList,IonItem,IonText,IonButton} from "@ionic/react";
import {Link} from "react-router-dom";
import DataF from './fetchedData';

const Home:React.FC=()=>{


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Mersul Trenurilor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {
                        Array(10).fill(0).map((_,i)=>(
                            <IonItem key={i}>
                                <IonText>
                                    List Item {i}
                                </IonText>
                            </IonItem>
                        ))
                    }
                </IonList>
                <IonButton color="secondary"><Link to={"/dataFetched"} >
                    Fetch Data
                </Link>
                </IonButton>
            </IonContent>
        </IonPage>
    )
}
export default Home;