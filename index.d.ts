import mongoose = require('mongoose');

declare module 'mongoose' {
    namespace Schema {
        namespace Types {
            class Currency extends SchemaType { }
        }
    }
}

export function loadType(mongoose: mongoose.Mongoose): void;

