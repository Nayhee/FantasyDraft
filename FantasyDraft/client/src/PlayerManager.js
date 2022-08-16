const baseUrl = '/api/Player';

export const getAllPlayers = () => {
    return fetch(baseUrl)
      .then((res) => res.json())
};

// export const getPlayerById = (playerId) => {
//     return fetch(`${baseUrl}/${playerId}`)
//         .then(res => res.json())
// }

// export const updatePlayer = (editedPlayer) => {
//     return fetch(`${baseUrl}/${editedPlayer.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(editedPlayer),
//     });
// };

// export const searchPlayer = (query) => {
//   return fetch(`${baseUrl}/Search?query=${query}`)
//       .then((res) => res.json())
// }
