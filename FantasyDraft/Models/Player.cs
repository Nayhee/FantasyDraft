using System;

namespace FantasyDraft.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int Rank { get; set; }
        public string Team { get; set; }
        public string Position { get; set; }

    }
}
