'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function DoctrinalBeliefsPage() {
  const [expandedBelief, setExpandedBelief] = useState<number | null>(null);

  const toggleBelief = (index: number) => {
    setExpandedBelief(expandedBelief === index ? null : index);
  };

  const doctrinalBeliefs = [
    {
      title: 'The Holy Scriptures',
      summary: 'We believe in the divine inspiration and authority of the Bible.',
      content: `We believe that the Bible is the inspired Word of God, written by holy men of old as they were moved by the Holy Spirit (2 Timothy 3:16, 2 Peter 1:21). The Scriptures are infallible, inerrant in the original manuscripts, and the supreme and final authority for faith and life. The Bible is God's revelation to man and is the only rule for Christian faith and practice.`,
      verses: ['2 Timothy 3:16-17', '2 Peter 1:20-21', 'Psalm 119:105', 'Isaiah 40:8']
    },
    {
      title: 'The Godhead',
      summary: 'We believe in one God eternally existing in three persons.',
      content: `We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. These three are co-equal and co-eternal, being the same in substance but distinct in subsistence and operation (Matthew 28:19, 2 Corinthians 13:14). Each person of the Trinity is fully God, yet there is but one God.`,
      verses: ['Matthew 28:19', '2 Corinthians 13:14', '1 John 5:7', 'Genesis 1:26']
    },
    {
      title: 'Jesus Christ',
      summary: 'We believe Jesus Christ is fully God and fully man.',
      content: `We believe that Jesus Christ is the eternal Son of God, who became incarnate through the virgin birth. He is both fully God and fully man, without sin. He lived a perfect life, died on the cross as a substitute for sinners, rose bodily from the dead, and ascended to heaven where He now intercedes for believers (John 1:1, 14; 1 Timothy 3:16; 1 Corinthians 15:3-4).`,
      verses: ['John 1:1, 14', 'Isaiah 7:14', '1 Corinthians 15:3-4', 'Hebrews 7:25']
    },
    {
      title: 'The Holy Spirit',
      summary: 'We believe the Holy Spirit is God and active in believers today.',
      content: `We believe that the Holy Spirit is the third person of the Trinity, co-equal with the Father and Son. He convicts the world of sin, regenerates believers, indwells all Christians, and empowers them for Christian living and service. The Holy Spirit distributes spiritual gifts to believers for the edification of the church (John 16:8; Titus 3:5; 1 Corinthians 12:4-11).`,
      verses: ['John 16:7-11', '1 Corinthians 12:4-11', 'Galatians 5:22-23', 'Acts 1:8']
    },
    {
      title: 'Salvation',
      summary: 'We believe salvation is by grace through faith alone.',
      content: `We believe that salvation is the gift of God to man, received by grace through faith in Jesus Christ alone. It is not by works, but by believing in the finished work of Christ on the cross. All who receive Jesus Christ as Lord and Savior are born again and become children of God (Ephesians 2:8-9; John 1:12; Romans 10:9-10).`,
      verses: ['Ephesians 2:8-9', 'John 3:16', 'Romans 10:9-10', 'Acts 16:31']
    },
    {
      title: 'Eternal Security',
      summary: 'We believe in the eternal security of the believer.',
      content: `We believe that all who are truly born again are kept by God's power and are secure in Christ forever. The believer's eternal security is based not on their performance but on God's faithfulness and the finished work of Christ. Nothing can separate the believer from the love of God (John 10:28-29; Romans 8:38-39; 1 Peter 1:5).`,
      verses: ['John 10:28-29', 'Romans 8:38-39', '1 Peter 1:3-5', 'Jude 1:24']
    },
    {
      title: 'The Church',
      summary: 'We believe the church is the body of Christ.',
      content: `We believe that the church is the body of Christ, composed of all believers from Pentecost to the Rapture. The local church is a congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel, observing the ordinances of Christ, and seeking to extend the gospel to the ends of the earth (1 Corinthians 12:13; Ephesians 1:22-23; Matthew 28:19-20).`,
      verses: ['1 Corinthians 12:13', 'Ephesians 1:22-23', 'Acts 2:41-47', 'Matthew 28:19-20']
    },
    {
      title: 'Baptism and Communion',
      summary: 'We believe in two ordinances: baptism and communion.',
      content: `We believe that Christian baptism is the immersion of a believer in water in the name of the Father, Son, and Holy Spirit. It is an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Savior. Communion is a symbolic act of obedience whereby believers remember the Lord's death until He comes (Matthew 28:19; Romans 6:4; 1 Corinthians 11:23-26).`,
      verses: ['Matthew 28:19', 'Romans 6:3-4', '1 Corinthians 11:23-26', 'Acts 8:36-39']
    },
    {
      title: 'Spiritual Gifts',
      summary: 'We believe in the operation of spiritual gifts today.',
      content: `We believe that the Holy Spirit distributes spiritual gifts to believers for the edification of the church and the advancement of God's kingdom. These gifts are given according to God's will and should be exercised in love and order. We believe in the continuation of all biblical spiritual gifts, including the gifts of healing, prophecy, tongues, and interpretation (1 Corinthians 12:4-11; 14:1-40).`,
      verses: ['1 Corinthians 12:4-11', '1 Corinthians 14:1', 'Romans 12:6-8', 'Ephesians 4:11-12']
    },
    {
      title: 'Divine Healing',
      summary: 'We believe in divine healing through faith in Jesus Christ.',
      content: `We believe that divine healing is provided in the atonement and is available to all believers. Healing may come through prayer, the laying on of hands, anointing with oil, or other biblical means. While we believe in divine healing, we also recognize that God may choose to heal through medical means or may have other purposes in allowing sickness (Isaiah 53:4-5; James 5:14-15; 1 Peter 2:24).`,
      verses: ['Isaiah 53:4-5', 'Matthew 8:16-17', 'James 5:14-15', '1 Peter 2:24']
    },
    {
      title: 'The Second Coming',
      summary: 'We believe in the personal, visible return of Jesus Christ.',
      content: `We believe in the personal, visible, and imminent return of Jesus Christ to earth. This includes the rapture of the church, the seven-year tribulation period, the second coming of Christ to establish His millennial kingdom, and the eternal state. We believe that Christ's return is the blessed hope of the church (1 Thessalonians 4:16-17; Revelation 19:11-16; Titus 2:13).`,
      verses: ['1 Thessalonians 4:16-17', 'Acts 1:11', 'Revelation 19:11-16', 'Titus 2:13']
    },
    {
      title: 'Eternal Judgment',
      summary: 'We believe in eternal heaven and hell.',
      content: `We believe in the bodily resurrection of all people, the everlasting conscious bliss of the righteous, and the everlasting conscious punishment of the wicked. Heaven is the eternal dwelling place of all who have been born again, while hell is the place of eternal punishment for those who reject Christ (John 5:28-29; Matthew 25:46; Revelation 20:11-15).`,
      verses: ['John 5:28-29', 'Matthew 25:46', 'Revelation 20:11-15', '2 Corinthians 5:10']
    },
    {
      title: 'Christian Living',
      summary: 'We believe Christians should live holy, separated lives.',
      content: `We believe that Christians should live holy lives, separated from worldly practices that dishonor God. Believers should walk in the Spirit, bearing the fruit of the Spirit, and should be actively involved in sharing the gospel and making disciples. The Christian life is one of progressive sanctification, growing in grace and knowledge of Jesus Christ (Galatians 5:16, 22-23; 2 Peter 3:18; Matthew 28:19-20).`,
      verses: ['Galatians 5:16, 22-23', '1 Peter 1:15-16', '2 Peter 3:18', 'Romans 12:1-2']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <BookOpenIcon className="h-10 w-10" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Doctrinal Beliefs
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed font-serif italic mb-8 max-w-4xl mx-auto">
              "All scripture is given by inspiration of God, and is profitable for doctrine, 
              for reproof, for correction, for instruction in righteousness" - 2 Timothy 3:16
            </p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              These are the fundamental biblical truths that form the foundation of our faith 
              and guide our ministry at Revival Ark International Ministries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Founded on Biblical Truth
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-secondary-700 leading-relaxed">
              Our doctrinal beliefs are firmly rooted in the Word of God and reflect our commitment 
              to biblical orthodoxy. These beliefs guide our teaching, preaching, and ministry practices. 
              We hold to these truths as essential to the Christian faith and the foundation of our 
              relationship with God.
            </p>
          </div>
        </div>
      </section>

      {/* Doctrinal Beliefs */}
      <section className="py-16 bg-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {doctrinalBeliefs.map((belief, index) => (
              <div key={index} className="bg-primary-50 rounded-xl shadow-lg overflow-hidden border border-primary-200">
                <button
                  onClick={() => toggleBelief(index)}
                  className="w-full px-6 py-6 text-left hover:bg-primary-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {index + 1}. {belief.title}
                      </h3>
                      <p className="text-secondary-600">
                        {belief.summary}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {expandedBelief === index ? (
                        <ChevronUpIcon className="h-6 w-6 text-primary-600" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-secondary-400" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedBelief === index && (
                  <div className="px-6 pb-6 border-t border-neutral-100">
                    <div className="pt-6">
                      <p className="text-secondary-700 leading-relaxed mb-6">
                        {belief.content}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-900 mb-3">
                          Key Scripture References:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {belief.verses.map((verse, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                            >
                              {verse}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-100 rounded-2xl p-8 lg:p-12 border border-primary-200">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Commitment to Truth
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
              <p className="text-lg text-secondary-700 leading-relaxed mb-8">
                These doctrinal beliefs represent our unwavering commitment to biblical truth. 
                We believe that sound doctrine is essential for spiritual growth, effective ministry, 
                and maintaining unity in the body of Christ. All our teaching, preaching, and 
                ministry activities are guided by these foundational truths.
              </p>
              <blockquote className="text-xl font-serif italic text-primary-700 border-l-4 border-primary-500 pl-6 mb-8">
                "But continue thou in the things which thou hast learned and hast been assured of, 
                knowing of whom thou hast learned them; And that from a child thou hast known the 
                holy scriptures, which are able to make thee wise unto salvation through faith 
                which is in Christ Jesus." - 2 Timothy 3:14-15
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions About Our Beliefs?
          </h2>
          <p className="text-xl text-secondary-200 mb-8 max-w-2xl mx-auto">
            We'd love to discuss these biblical truths with you. Our pastors and teachers 
            are available to answer questions and provide further clarification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors transform hover:scale-105"
            >
              Contact Our Pastors
            </a>
            <a
              href="/resources/bible-study"
              className="inline-flex items-center px-8 py-4 bg-white text-secondary-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors transform hover:scale-105"
            >
              Bible Study Resources
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}