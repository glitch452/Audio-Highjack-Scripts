export type TagKey =
  | 'album'
  | 'albumArtist'
  | 'artist'
  | 'comment'
  | 'disc'
  | 'discCount'
  | 'genre'
  | 'title'
  | 'track'
  | 'trackCount'
  | 'year';

export type TagsDictionary = Record<TagKey, string>;
