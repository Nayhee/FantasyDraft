using FantasyDraft.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using FantasyDraft.Utils;
using System.Linq;

namespace FantasyDraft.Repositories
{
    public class PlayerRepository : BaseRepository, IPlayerRepository
    {
        public PlayerRepository(IConfiguration configuration) : base(configuration) { }

        public List<Player> GetAllPlayers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @" SELECT * FROM Player ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<Player> players = new List<Player>();
                        while (reader.Read())
                        {
                            Player player = new Player
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Rank = DbUtils.GetInt(reader, "Rank"),
                                Team = DbUtils.GetString(reader, "Team"),
                                Position = DbUtils.GetString(reader, "Position")
                            };
                            players.Add(player);
                        }
                        return players;
                    }
                }
            }
        }

    }
}
