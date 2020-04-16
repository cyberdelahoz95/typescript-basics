import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';
import { PlayerService, PlayersTableHeaders } from '../services/player.service';

@Component({
    selector: 'app-player-table',
    templateUrl: './player-table.component.html',
    styleUrls: ['./player-table.component.scss'],
})
export class PlayerTableComponent implements OnInit {
    public players$: Observable<Player[]>;
    public tableHeaders: string[] = PlayersTableHeaders;
    public selectedPlayer: Player;
    public showModal: boolean;

    constructor(private playerService: PlayerService) {}

    ngOnInit(): void {
        this.players$ = this.playerService.getPlayers();
    }

    newPlayer() {
        this.showModal = true;
        this.selectedPlayer = null;
        setTimeout(() => {
            window.location.replace('#open-modal');
        });
    }

    editPlayer(player: Player) {
        this.selectedPlayer = { ...player };
        this.showModal = true;
        setTimeout(() => {
            window.location.replace('#open-modal');
        });
    }

    closeDialog() {
        this.showModal = false;
    }
}