using FantasyDraft.Models;
using System.Collections.Generic;

namespace FantasyDraft.Repositories
{
    public interface IPlayerRepository
    {
        List<Player> GetAllPlayers();
    }
}