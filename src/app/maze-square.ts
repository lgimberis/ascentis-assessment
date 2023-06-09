export interface MazeSquare {
    classNames: string;
    row: number;
    column: number;
    hasObject: boolean;
    objectImgURL: string;
    objectName: string;
    objectClass: string;
    objectActive: boolean;
}
