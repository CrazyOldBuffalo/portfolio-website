export default class Socials {
    IconName: string;
    IconLink: string;

    constructor(iconname: string, iconlink: string) {
        this.IconName = iconname
        this.IconLink = iconlink
    }

    
    public get Iconname() : string {
        return this.IconName
    }

    public get Iconlink() : string {
        return this.IconLink
    }
}
