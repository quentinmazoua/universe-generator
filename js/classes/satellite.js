class Satellite extends CelestialBody
{
    constructor(designation, mass, parent)
    {
        super("Satellite", designation, mass);

        if(parent != undefined)
        {
            parent.addChild(this);
            this.parent = parent;
        }
    }
}