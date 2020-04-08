import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Team } from '../interfaces/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const TeamsTableHeaders = ['Name', 'Country', 'Players'];

@Injectable({
    providedIn: 'root',
})
export class TeamService {
    private teamsDb: AngularFireList<Team>;

    // by adding access modifier in the param db,
    // we are saying that our class has an attribute named db and that it is private
    // doing this reduce the code to explicity decalre the attribute db
    constructor(private db: AngularFireDatabase) {
        this.teamsDb = this.db.list('/teams', (ref) =>
            ref.orderByChild('namme')
        );
    }

    getTeams(): Observable<Team[]> {
        return this.teamsDb.snapshotChanges().pipe(
            map((changes) => {
                return changes.map((c) => ({
                    $key: c.payload.key,
                    ...c.payload.val(),
                }));
            })
        );
    }

    addTeam(team: Team) {
        return this.teamsDb.push(team);
    }

    deleteTeam(id: string) {
        this.db.list('/teams').remove(id);
    }

    editTeam(newTeamData) {
        const $key = newTeamData.$key;
        delete newTeamData.$key;
        this.db.list('/teams').update($key, newTeamData);
    }
}
