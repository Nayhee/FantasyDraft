import React, { useEffect, useState } from "react";
import "./Player.css";
import { useNavigate } from "react-router-dom";
import { Button, Input, Table } from "reactstrap";
import { getAllPlayers} from "./PlayerManager";

export default function PlayerList() {

    const [QB, setQB] = useState([null]);
    const [RB, setRB] = useState([null]);
    const [WR, setWR] = useState([null]);
    const [TE, setTE] = useState([null]);

    const getPlayers = () => {
        getAllPlayers()
        .then(players => {
            const QBs = players.filter(p => p.position == 'QB');
            setQB(QBs);
            const RBs = players.filter(p => p.position == 'RB');
            setRB(RBs);
            const WRs = players.filter(p => p.position == 'WR');
            setWR(WRs);
            const TEs = players.filter(p => p.position == 'TE');
            setTE(TEs);
        })
    }

    useEffect(() => {
        getPlayers();
    }, [])

    if(QB !== null) {

        return (
            <div className="playerList">
    
                <div className="positionWrapper">
                    <h4 className="positionTitle">Quarterbacks</h4>
                    <Table className="table" responsive bordered striped hover>
                        <thead>
                            <tr>
                                <th>Rk</th>
                                <th>Tm</th>
                                <th>Name</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {QB?.map(qb => 
                                <tr className="tableRow" key={qb?.id}>
                                    <td>{qb?.rank}</td>
                                    <td>{qb?.team}</td>
                                    <td className="names">{qb?.name}</td>
                                    <td>{qb?.points}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
    
                <div className="positionWrapper">
                    <h4 className="positionTitle">Running Backs</h4>
                    <Table className="table" responsive bordered striped hover>
                        <thead>
                            <tr>
                                <th>Rk</th>
                                <th>Tm</th>
                                <th>Name</th>
                                <th>Points</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {RB?.map(rb => 
                                <tr key={rb?.id}>
                                    <td>{rb?.rank}</td>
                                    <td>{rb?.team}</td>
                                    <td className="names">{rb?.name}</td>
                                    <td>{rb?.points}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
    
                <div className="positionWrapper">
                <h4 className="positionTitle">Wide Receivers</h4>
                    <Table className="table" responsive bordered striped hover>
                        <thead>
                            <tr>
                                <th>Rk</th>
                                <th>Tm</th>
                                <th>Name</th>
                                <th>Points</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {RB?.map(wr => 
                                <tr key={wr?.id}>
                                    <td>{wr?.rank}</td>
                                    <td>{wr?.team}</td>
                                    <td className="names">{wr?.name}</td>
                                    <td>{wr?.points}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
    
                <div className="positionWrapper">
                    <h4 className="positionTitle">Tight-Ends</h4>
                    <Table className="table" responsive bordered striped hover>
                        <thead>
                            <tr>
                                <th>Rk</th>
                                <th>Tm</th>
                                <th>Name</th>
                                <th>Points</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {TE?.map(te => 
                                <tr key={te?.id}>
                                    <td>{te?.rank}</td>
                                    <td>{te?.team}</td>
                                    <td className="names">{te?.name}</td>
                                    <td>{te?.points}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
    
            </div>
        )
    }

    else {
        return
    }

}