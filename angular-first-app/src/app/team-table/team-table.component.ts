import { Component, OnInit } from '@angular/core';
import { TeamService, TeamsTableHeaders } from '../services/team.service';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { take } from 'rxjs/operators';
import { Country } from '../interfaces/player';

@Component({
    selector: 'app-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.scss'],
})
export class TeamTableComponent implements OnInit {
    // the type is observable beacuse the attribute
    // is going to be a value comming from an async method or operation
    public teams$: Observable<Team[]>;

    public tableHeaders: string[] = TeamsTableHeaders;

    constructor(private teamService: TeamService) {}

    ngOnInit(): void {
        // This is the best place to make http request or consume services
        this.teams$ = this.teamService.getTeams();
        // this code that follows is juts to add a team just in case the table is empty
        this.teamService
            .getTeams()
            .pipe(take(1))
            .subscribe((teams) => {
                if (teams.length === 0) {
                    const team: Team = {
                        name: 'My Team',
                        country: Country.Colombia,
                        players: null,
                    };
                    this.teamService.addTeam(team);
                }
            });
    }
}
