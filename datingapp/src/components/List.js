import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Button
} from 'react-native';

export default function List ({matches, detailsCallback}) {

    matches = //Call algorithm to obtain match data
    //We want to retrieve all of the IDs

    data = //Call API to retrieve profile and descritptions based on the ID

    for (i = length; i < ID.length; i++) { 
        
    }

    var userData = {
        length //of ID array

        



    }
}



// export default function List ({matches, detailsCallback}) {

//     function renderList() {
//         const matchesList = items.map((match, index) => {
//             return (
//                 <View>
//                     <Text> match.name </Text>
//                     <Button 
//                         title="Details"
//                         onPress={detailsCallback(match)}/>
//                 </View>);
//         })
//         return itemsList;
//     }
    
//     return(
//         <View>
//             <Text> Matches List </Text>
//             {this.renderList()}
//         </View>
//     )
// }

// List.propTypes = {
//     matches: PropTypes.array.isRequired,
//     detailsCallback: PropTypes.func.isRequired 
// }
