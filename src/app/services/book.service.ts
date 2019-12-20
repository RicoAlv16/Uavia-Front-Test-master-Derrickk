import {Injectable} from '@angular/core';
import {Book} from '../models/book.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private library = [
        {id: 0, title: 'L\'Épopée de Gilgamesh'},
        {id: 1, title: 'L’Iliade'},
        {id: 2, title: 'L’Odyssée'},
        {id: 3, title: 'Code de Hammurabi'},
        {id: 4, title: 'Les Métamorphoses'},
        {id: 5, title: 'L’Énéide'}
    ];


    private books: Book[] = [
        new Book(0, 'L\'Épopée de Gilgamesh', 'L\'Épopée de Gilgamesh est un récit épique de Mésopotamie. Faisant partie des œuvres littéraires les plus anciennes de l\'humanité, la première version connue a été rédigée en akkadien dans la Babylonie du XVIII e au XVII e siècle av.'),
        new Book(1, 'L’Iliade', 'L’Iliade est une épopée de la Grèce antique attribuée à l\'aède légendaire Homère. Ce nom provient de la périphrase « le poème d\'Ilion », Ilion étant l\'autre nom de la ville de Troie. L’Iliade est composé de 15 337 hexamètres dactyliques et, depuis l\'époque hellénistique, divisée en vingt-quatre chants.'),
        new Book(2, 'L’Odyssée', 'L’Odyssée est une épopée grecque antique attribuée à l’aède Homère, qui l\'aurait composée après l’Iliade, vers la fin du VIIIᵉ siècle av. J.-C. Elle est considérée comme l’un des plus grands chefs-d’œuvre de la littérature et, avec l’Iliade, comme l\'un des deux « poèmes fondateurs » de la civilisation européenne.'),
        new Book(3, 'Code de Hammurabi', 'Le Code de Hammurabi est un texte juridique babylonien daté d\'environ 1750 av. J.-C., à ce jour le plus complet des codes de lois connus de la Mésopotamie antique.'),
        new Book(4, 'Les Métamorphoses', 'Les Métamorphoses sont un long poème latin d\'Ovide, dont la composition débute probablement en l\'an 1.'),
        new Book(5, 'L’Énéide', 'L’Énéide est une épopée de Virgile, le plus prestigieux exemple de ce genre littéraire en langue latine, composée en hexamètres dactyliques.'),
    ];

    constructor() {
    }

    getLibrary() {
        return this.library;
    }

    requestBook(id: number): Observable<Book> {
        return new Observable((observer) => {
            // Return book after 1sec
            setTimeout(() => observer.next(this.books[id]), 1000);
        });
    }
}
