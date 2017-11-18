export class User {
    id: number;
    username: string;
    roles: string[] = [];

    constructor(i, u, r) {
        this.id = i;
        this.username = u;
        this.roles.push(r);
    }

    addRole(role) {
        if (!this.roles.includes(role)) {
            this.roles.push(role);
        }
    }
}
