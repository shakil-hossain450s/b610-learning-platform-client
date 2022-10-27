import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "left"
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "gray",
    }
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header}>Course Name</Text>
                {/* <Image style={styles.image} src={pdf?.image}></Image> */}
                <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, a incidunt laborum quisquam labore esse tempore autem sunt voluptatem beatae? Fugiat adipisci excepturi impedit beatae aspernatur aut, cum consectetur modi, deleniti incidunt exercitationem laudantium atque cupiditate harum? Explicabo nisi molestiae et laudantium magni, soluta ut repellendus eveniet fugiat, omnis laborum!</Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    )
};

export default PDFFile;