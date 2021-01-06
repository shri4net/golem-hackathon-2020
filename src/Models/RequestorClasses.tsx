class RequestorClasses {

}

class RequestorInstance {
    Id: string = "";
    OuputResultsFolder: string = "";
    InputSourceFolder: string = "";
}

class BlenderRequestorInstance extends RequestorInstance {
    FileBlender: string = "";
}

export {RequestorClasses, RequestorInstance, BlenderRequestorInstance}