class CelestialBody
{
    constructor(type, designation, mass)
    {
        this.type = type;
        this.designation = designation;
        this.mass = mass;
        this.children = [];
    }

    addChild(celestialBody)
    {
        this.children.push(celestialBody);
    }
}